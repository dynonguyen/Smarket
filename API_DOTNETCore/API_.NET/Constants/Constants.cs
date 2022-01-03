using System;

namespace API_.NET.Constants
{
    public static class Constants
    {
        public enum USER_TYPES
        {
            DEFAULT, CUSTOMER, SHIPPER, STORE, ADMIN, GUEST
        }

        public static string getRole(int userType)
        {
            switch (userType)
            {
                case 1:
                    return "ROLE_CUSTOMER";
                case 2:
                    return "ROLE_SHIPPER";
                case 3:
                    return "ROLE_STORE";
                case 4:
                    return "ROLE_ADMIN";
                default:
                    return "ROLE_GUEST";
            }
        }

        public enum REGION_LEVELS
            {
                DEFAULT, GREEN, YELLOW, ORANGE, RED
            }

        public static int PAGE_SIZE = 8;

        public static int PW_SALT = 10;
    }
}
