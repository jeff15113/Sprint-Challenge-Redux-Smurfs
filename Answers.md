1.  In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions in redux is an object that represents what is going to happen to the data in your application. Reducers are what impliment the changes based on what is sent to it by actions. The store is like the main database in your redux application. It holds all the state and components can 'connect' to it and retreve needed state from it.

2.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is like a global state that your entire application can access. ex. react state. component is a local/private state inside a component that will only be used in its scope.

3)  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    redux-thunk is a middleware that allows us to make AJAX request and other asynchronous requests by the usage of thunks. It intercepts the function from the action creator runs the function, then passes the action object to the next middleware, if one exsists, else it fowards it back to redux.
