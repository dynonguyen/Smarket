package api.java.dto;

import api.java.utils.MappingObjectDto;

public class EmptyDto implements MappingObjectDto<EmptyDto> {
    @Override
    public EmptyDto mapValueFromObject(Object[] obj) {
        return null;
    }
}
