package api.java.utils;

import java.util.ArrayList;
import java.util.List;

import api.java.dto.PaginationDto;

public class Pagination<T> {
    public PaginationDto<T> paging(List<T> data,int pageSize,int page){

        PaginationDto<T> result = new PaginationDto<>();
        int curPage = (pageSize *(page-1));
		int desPage = (pageSize*page -1);
		List<T> newData = new ArrayList<>();
		for(int i =curPage; i<=desPage; i++){
            if(i < data.size()){
			    newData.add(data.get(i));
            }
            else{
                break;
            }
		}
		result.setData(newData);
		result.setPage(page);
		result.setTotal(data.size());
		return result;
    }

}
