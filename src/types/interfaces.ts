export enum Tags {
    'red tag'='red tag',
    'blue tag'='blue tag',
    'green tag'='green tag',
    'yellow tag'='yellow tag',
    'orange tag'='orange tag',
}

export enum EndpointType {
    'vm_host'='vm_host',
    'vm_guest'='vm_guest',
}

export interface Data {
    'status': boolean,
    'name': string,
    'endpoint_type': string,
    'location': string,
    'value': string,
    'number': number,
    'tags': string,
    'creation_date': string,
    'update_date': string,
    'audit_date': string,
    'id': string
}