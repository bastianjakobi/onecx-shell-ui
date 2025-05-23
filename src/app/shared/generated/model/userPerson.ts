/**
 * onecx-shell-bff
 * Backend-For-Frontend (BFF) service for OneCX Shell. This API provides base configuration information for frontends.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tkit_dev@1000kit.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserPersonPhone } from './userPersonPhone';
import { UserPersonAddress } from './userPersonAddress';


export interface UserPerson { 
    firstName?: string;
    lastName?: string;
    displayName?: string;
    email?: string;
    address?: UserPersonAddress;
    phone?: UserPersonPhone;
}

