export interface NavItem{
    name: String ;
    disabled : boolean;
    route ?: string; 
    children?: NavItem[];
}