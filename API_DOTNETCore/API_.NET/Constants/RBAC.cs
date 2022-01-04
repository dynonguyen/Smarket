using API_.NET.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API_.NET.Constants
{
    public class RBAC
    {
        public static void SetRoleToClaims(ref TokenValidatedContext context)
        {
            var username = context.Principal.Claims.FirstOrDefault(x => x.Type.Equals("username", StringComparison.InvariantCultureIgnoreCase)).ToString();
            using (var _context = new SmarketContext())
            {
                Account account = _context.Account.Where(s => s.Username == username).FirstOrDefault<Account>();
                if (account != null)
                {
                    var role = Constants.GetRole(account.AccountType);
                    var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Role, role)
                    };
                    var appIdentity = new ClaimsIdentity(claims);
                    context.Principal.AddIdentity(appIdentity);

                }


            }
        }
    }
}
