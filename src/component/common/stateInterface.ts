/**
 * App State Interface
 */
export interface AppState {
    userInfo: {
        id: string,
        password: string,
        userName: string,
        userBirth: string,
    };
    [key: string]: any;
}

/**
 * Join State Interface
 */
export interface JoinState {
    input: {
      id: string,
      password: string,
      checkPW: string,
      userName: string,
      userBirth: string,
    },
    userInfo: {
      id: string,
      password: string,
      userName: string,
      userBirth: string,
    },
    [key: string]: any,
  }