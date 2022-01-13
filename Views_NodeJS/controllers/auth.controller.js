const authApi = require('../apis/auth.api');
const {
  JWT_HEADER,
  JWT_STORE_KEY,
  ROLES,
} = require('../constants/index.constant');
const store = require('store');
const cloudinary = require('../configs/cloudinary.config');
const commonApi = require('../apis/common.api');

exports.getLogin = (req, res) => {
  if (req.session.user && req.session.user.role !== ROLES.GUEST) {
    return res.redirect('/redirector');
  }
  return res.render('login.pug');
};

exports.getLogout = (req, res) => {
  store.remove(JWT_STORE_KEY);
  res.clearCookie(JWT_HEADER);
  req.session.user = null;
  return res.redirect('/redirector');
};

exports.postLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.render('login.pug');

  try {
    const apiRes = await authApi.login(username, password);
    const { jwt, username: user, role, expired } = apiRes.data;

    if (!jwt) {
      throw new Error("JWT Token doesn't exist");
    }

    // Create session & cookie
    req.session.user = {
      username: user,
      role,
      expired,
    };
    res.cookie(JWT_HEADER, jwt, {
      expires: new Date(expired),
    });
    store.set(JWT_STORE_KEY, jwt);

    return res.redirect('/redirector');
  } catch (error) {
    let msg = 'Đăng nhập thất bại, thử lại !';

    if (error.response) {
      msg = error.response.data?.msg;
      console.error('Function postLogin Error:', msg);
    } else {
      console.error('Function postLogin Error:', error);
    }

    return res.render('login.pug', {
      msg,
      username,
    });
  }
};

exports.getSignUP = (req, res) => {
  if (req.session.user && req.session.user.role !== ROLES.GUEST) {
    return res.redirect('/redirector');
  }
  return res.render('signup');
};

exports.postSignUp = async (req, res) => {
  const account = req.body;
  if (
    !account.username ||
    !account.password ||
    !account.type ||
    !account.email
  ) {
    return res.render('signup', {
      msg: 'Đăng ký thất bại, vui lòng thử lại!',
    });
  }
  const uploader = async (path) => await cloudinary.uploads(path, 'Images');
  try {
    const acc = {
      AccountType: account.type,
      Username: account.username,
      Password: account.password,
      Email: account.email,
      CreateTime: new Date(),
    };
    let ward = await commonApi.getWardById(account.ward);
    let district = await commonApi.getDistrictById(account.district);
    let province = await commonApi.getProvinceById(account.province);
    ward = ward.data;
    district = district.data;
    province = province.data;
    const accRes = await authApi.signup(acc);
    if (accRes.data.msg === 'Success') {
      const accountId = accRes.data.data;
      let avatar;
      let certificate;
      if (req.files.avatar) {
        avatar = await uploader(req.files.avatar[0].path);
      } else {
        avatar = {
          url: ' ',
        };
      }
      if (req.files.certificate) {
        certificate = await uploader(req.files.certificate[0].path);
      } else {
        certificate = {
          url: ' ',
        };
      }
      const user = {
        AccountId: accountId,
        Avatar: avatar.url,
        Name: account.name,
        Phone: account.phone,
        PeopleId: account.peopleid,
        Address: `${account.address}, ${ward.prefix + ' ' + ward.wardName}, ${
          district.prefix + ' ' + district.districtName
        }, ${province.provinceName}`,
        Ward: account.ward,
      };
      const userRes = await authApi.createUser(user);
      if (userRes.data.msg === 'Success') {
        const UserId = parseInt(userRes.data.data);
        switch (account.type) {
          case '1': {
            const customer = {
              CustomerLevel: 1,
              UserId: UserId,
            };
            const cusRes = await authApi.createCustomer(customer);
            if (cusRes.data === 'Success') {
              return res.redirect('/auth/login');
            } else {
              return res.render('signup', {
                msg: 'Đăng ký thất bại, vui lòng kiểm tra lại các thông tin',
              });
            }
            break;
          }
          case '2': {
            const shipper = {
              Status: 0,
              Area: account.district,
              ShipperLicense: certificate.url,
              ShipperRating: 5,
              UserId: UserId,
            };
            const shipRes = await authApi.createShipper(shipper);
            if (shipRes.data === 'Success') {
              return res.redirect('/auth/login');
            } else {
              return res.render('signup', {
                msg: 'Đăng ký thất bại, vui lòng kiểm tra lại các thông tin',
              });
            }
            break;
          }
          case '3': {
            const store = {
              StoreType: account.storeType,
              Status: 0,
              Area: account.district,
              Certificate: certificate.url,
              Categories: account.categories,
              UserId: UserId,
            };
            const storeRes = await authApi.createStore(store);
            if (storeRes.data === 'Success') {
              return res.redirect('/auth/login');
            } else {
              return res.render('signup', {
                msg: 'Đăng ký thất bại, vui lòng kiểm tra lại các thông tin',
              });
            }
            break;
          }
        }
      } else {
        return res.render('signup', {
          msg: 'Tên đăng nhập đã tồn tại.',
        });
      }
    } else {
      return res.render('signup', {
        msg: 'Tên đăng nhập đã tồn tại.',
      });
    }
  } catch (error) {
    //console.log('ERROR' + error);
    return res.render('signup', {
      msg: 'Đăng ký thất bại, vui lòng thử lại!.',
    });
  }
};
