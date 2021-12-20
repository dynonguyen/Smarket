package api.java.constants;

public class AppConstants {
    public enum USER_TYPES {
        CUSTOMER(1), SHIPPER(2), STORE(3);

        private int value;

        private USER_TYPES(int value) {
            this.value = value;
        }

        public int get() {
            return this.value;
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

}