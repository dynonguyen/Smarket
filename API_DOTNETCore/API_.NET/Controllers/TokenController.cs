using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JwtDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        [HttpPost("token-customer")]
        public ActionResult GetTokenCustomer()
        {
            //security key
            string securityKey = "Jwt_Smarket_Secret";
            //symmetric security key
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));

            //signing credentials
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            //add claims
            var claims = new List<Claim>();
            claims.Add(new Claim("username", "Regina19"));
            //create token
            var token = new JwtSecurityToken(             
                   expires: DateTime.Now.AddDays(3),
                   
                   signingCredentials: signingCredentials,
                   claims: claims
                );

            //return token
            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }
        [HttpPost("token-admin")]
        public ActionResult GetTokenAdmin()
        {
            //security key
            string securityKey = "Jwt_Smarket_Secret";
            //symmetric security key
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));

            //signing credentials
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            //add claims
            var claims = new List<Claim>();
            claims.Add(new Claim("username", "Admin1"));
            //create token
            var token = new JwtSecurityToken(
                   expires: DateTime.Now.AddDays(3),

                   signingCredentials: signingCredentials,
                   claims: claims
                );

            //return token
            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }
        [HttpPost("token-shipper")]
        public ActionResult GetTokenShipper()
        {
            //security key
            string securityKey = "Jwt_Smarket_Secret";
            //symmetric security key
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));

            //signing credentials
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            //add claims
            var claims = new List<Claim>();
            claims.Add(new Claim("username", "Shane700"));
            //create token
            var token = new JwtSecurityToken(
                   expires: DateTime.Now.AddDays(3),

                   signingCredentials: signingCredentials,
                   claims: claims
                );

            //return token
            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }
        [HttpPost("token-store")]
        public ActionResult GetTokenStore()
        {
            //security key
            string securityKey = "Jwt_Smarket_Secret";
            //symmetric security key
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));

            //signing credentials
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            //add claims
            var claims = new List<Claim>();
            claims.Add(new Claim("username", "Damon27"));
            //create token
            var token = new JwtSecurityToken(
                   expires: DateTime.Now.AddDays(3),

                   signingCredentials: signingCredentials,
                   claims: claims
                );

            //return token
            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }
    }
}