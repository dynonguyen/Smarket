package api.java.dto;

import java.util.List;

import api.java.constants.AppConstants;

public class PaginationDto<T> {
    private int total = 0;
    private int page = 1;
    private int pageSize = AppConstants.PAGE_SIZE;
    private List<T> data;

    public PaginationDto() {
    }

    public PaginationDto(int total, int page, int pageSize, List<T> data) {
        this.total = total;
        this.page = page;
        this.pageSize = pageSize;
        this.data = data;
    }

    public int getTotal() {
        return this.total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getPage() {
        return this.page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getPageSize() {
        return this.pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public List<T> getData() {
        return this.data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }
}