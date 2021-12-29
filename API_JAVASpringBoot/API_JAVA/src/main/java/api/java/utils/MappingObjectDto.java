package api.java.utils;

public interface MappingObjectDto<T> {
    public T mapValueFromObject(Object[] obj);
}
