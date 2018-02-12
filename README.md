Create a beer app with react/redux/saga

https://punkapi.com/documentation/v2

you have console.log showing you the order of all the logic

your mission is

1. create an action type in /constants/actionTypes
2. create an action in /actions/yourAction
3. create a reducer in /reducers/yourReducer & add it into the root reducer
4. create a saga in /sagas/yourSaga & add it into the index saga
5. create an api call with saga dispatch request action still in /sagas/yourSaga with an api from https://punkapi.com/documentation/v2
6. after the api call dispatch an action success still in /sagas/yourSaga
7. write the data with the success action in your reducer in /reducers/yourReducer
8. connect your data in a container of you choice & show the data in a components
