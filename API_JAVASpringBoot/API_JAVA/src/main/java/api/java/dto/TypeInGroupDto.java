package api.java.dto;

import api.java.utils.*;

public class TypeInGroupDto implements MappingObjectDto<TypeInGroupDto>{
    
    private int TypeId;
    private int GroupId;
    private String TypeName;
    private int Amount;




    public TypeInGroupDto() {
    }

    public TypeInGroupDto(int TypeId,int GroupId, String TypeName, int Amount) {
        this.TypeId = TypeId;
        this.TypeName = TypeName;
        this.GroupId  = GroupId;
        this.Amount = Amount;
    }


    public int getType() {
        return this.TypeId;
    }

    public void setType(int id) {
        this.TypeId = id;
    }

    public int getGroup() {
      return this.GroupId;
    }

    public void setGroup(int id) {
        this.GroupId = id;
    }

    public String getName() {
      return this.TypeName;
    }

    public void setName(String name) {
      this.TypeName = name;
    }

    public int getAmount() {
        return this.Amount;
    }

    public void setAmount(int  amount) {
        this.Amount = amount;
    }

    @Override
    public TypeInGroupDto mapValueFromObject(Object[] obj) {
        if (obj.length < 4) {
            return this;
        }

        this.TypeId = ((int) obj[0]);
        this.GroupId = ((int) obj[1]);
        this.TypeName = ((String) obj[2]);
        this.Amount = ((Long) obj[3]).intValue();
        return this;
    }
}
