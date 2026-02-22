import type { DataPackage } from "../types.js";
import type { OrderStatus } from "../types.js";

export function ValidateData(Data: DataPackage): string[]{

  let errors: string[]=[]
  const validStatus=["Pending","Paid","Cancelled"];

    const IDs=Data.users.map(user=>{
              return user.id;
    });

      Data.users.forEach(user=>{
        if(!user.email.includes("@") || typeof user.email!=='string'){
             errors.push(`User with id of ${user.id} has invalid email!`);
        }
        if(typeof user.role !== 'string'){
          errors.push(`User with  id of ${user.id} has invalid role!`);
        }
        if(typeof user.createdAt !== 'string'){
          errors.push(`User with id of ${user.id} has invalid creation date!`)
        }
      });

      Data.orders.forEach(order=>{
        if(typeof order.amount!=='number'){
            errors.push(`Order with id of ${order.id} has invalid amount!`);
        }
        if(typeof order.createdAt !== 'string'){
          errors.push(`Order with id of ${order.id} has invalid creattion date!`)
        }
        if(typeof order.id !== 'number'){
          errors.push(`Order with id of ${order.id} has invalid id!`)
        }
        if(!validStatus.includes(order.status)){
                    errors.push(`Order with id of ${order.id} has invalid status!`);
        }
        if(!IDs.includes(order.userId)){
           errors.push(`Order with user id of ${order.userId} doesn't exist!`)
        }
      })

      return errors;
    }








