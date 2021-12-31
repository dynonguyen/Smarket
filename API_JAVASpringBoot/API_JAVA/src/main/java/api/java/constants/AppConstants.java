package api.java.constants;

public class AppConstants {
    public enum USER_TYPES {
        CUSTOMER(1), SHIPPER(2), STORE(3), ADMIN(4);

        private int value;

        private USER_TYPES(int value) {
            this.value = value;
        }

        public int get() {
            return this.value;
        }

        public static String getRole(int userType) {
            switch (userType) {
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
    }

    public enum REGION_LEVELS {
        GREEN(1), YELLOW(2), ORANGE(3), RED(4);

        private int value;

        private REGION_LEVELS(int value) {
            this.value = value;
        }

        public int get() {
            return this.value;
        }
    }

    public static int PAGE_SIZE = 8;

    public static int PW_SALT = 10;

    public static int JWT_EXP = 3 * 86400 * 1000; // 3 days

    public static String JWT_HEADER = "Authorization";

    public static String JWT_STARTS_WITH = "Bearer ";
}