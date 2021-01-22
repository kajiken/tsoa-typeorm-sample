import { Mapper } from '../../../application/base/Mapper';
import { User as UserDataModel } from '../entities/User';
import { User as UserDomainModel } from '../../../domain/models/User';

export class UserMapper implements Mapper<UserDomainModel, UserDataModel> {
  mapFrom(params: Omit<UserDomainModel, 'id'>): Omit<UserDataModel, 'id' | 'created' | 'updated'> {
    return {
      firstName: params.firstName,
      familyName: params.familyName,
    };
  }

  mapTo(entity: UserDataModel): UserDomainModel {
    return {
      id: entity.id,
      firstName: entity.firstName,
      familyName: entity.familyName,
      fullName: `${entity.familyName} ${entity.firstName}`,
      created: entity.created,
      updated: entity.updated,
    };
  }
}
