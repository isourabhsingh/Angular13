

export class AppSettings {
   
   
    
    public static  API_URL = 'https://localhost:7029/api/';

    public static  API_TOKEN = '';
    
    public static LoginUser = AppSettings.API_URL + 'User/Login';
    public static RegisterUser = AppSettings.API_URL + 'User/Register';
    

    public static GetAuthorDetails = AppSettings.API_URL + 'Values/GetAuthorsDetails';
    public static GetUserDetails = AppSettings.API_URL + 'User/GetUsersDetails';
    public static AddUserDetails = AppSettings.API_URL + 'User/AddEditUsersDetails';

    public static DeleteUserDetails = AppSettings.API_URL + 'User/DeleteUsersDetails';

    
   
} 


export const environment = {
    accessToken: '',
};
