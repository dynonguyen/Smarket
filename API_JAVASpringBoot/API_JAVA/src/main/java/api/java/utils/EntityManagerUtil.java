package api.java.utils;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import api.java.constants.AppConstants;

@Transactional
@Component
public class EntityManagerUtil<T extends MappingObjectDto<T>> {
    @Autowired
    private EntityManagerFactory emf;

    public Object getSingleResult(String queryString) {
        EntityManager em = emf.createEntityManager();
        Query query = em.createQuery(queryString);
        return query.getSingleResult();
    }

    public List<T> getResultList(Class<T> tClass, String queryString, Object... pagination) {
        try {
            EntityManager em = emf.createEntityManager();
            Query query = em.createQuery(queryString);

            if (pagination.length > 0) {
                int page = (int) pagination[0];
                int pageSize = pagination.length > 1 ? (int) pagination[1] : AppConstants.PAGE_SIZE;

                if (page > 0) {
                    // because start at 0
                    query.setFirstResult((page - 1) * pageSize);
                    query.setMaxResults(pageSize);
                }
            }

            @SuppressWarnings("unchecked")
            List<Object[]> objResList = query.getResultList();

            List<T> resultList = new ArrayList<>();

            for (Object[] obj : objResList) {
                T objMapped = (T) tClass.getConstructor().newInstance();
                if (objMapped instanceof MappingObjectDto) {
                    resultList.add(objMapped.mapValueFromObject(obj));
                }

            }

            return resultList;
        } catch (Exception e) {
            System.out.println("GET RESULT LIST ERROR " + e.toString());
            return List.of();
        }
    }
}