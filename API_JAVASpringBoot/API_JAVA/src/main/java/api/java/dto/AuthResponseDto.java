package api.java.dto;

public class AuthResponseDto {
    private String jwt;
    private String username;
    private String role;
    private String msg;
    private long expired;

    public AuthResponseDto(String msg) {
        this.msg = msg;
    }

    public AuthResponseDto(String jwt, String username, String role, long expired, String msg) {
        this.jwt = jwt;
        this.username = username;
        this.role = role;
        this.expired = expired;
        this.msg = msg;
    }

    public String getJwt() {
        return this.jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return this.role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getMsg() {
        return this.msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public long getExpired() {
        return this.expired;
    }

    public void setExpired(long expired) {
        this.expired = expired;
    }
}
