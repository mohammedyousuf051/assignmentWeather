--1 Question po - petowner, pd - petdata
Select po.owner_name,count(pd.id)
From PetOwner po inner join PetData pd on po.id = pd.owner_id group by po.owner_name

--2 Question

Select distinct owner_name
From PetOwner po inner join PetData pd on po.id= pd.owner_id where pd.pet_type=2