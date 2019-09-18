1. What problem does the context API help solve?

It solves the problem of state being hard to pass on when apps get really big
x
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where all the state is held in redux, It has all of your data state and makes it easy to manage. Reducers are what take in the initial state and hold it and pass it, actions are what change the state, there are usually cases and depending on which case happens is how the state changes

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is held outside of the components and can be accesesd with a call to it, Component State is usually on a smaller scale project wherer passing state from component to componieny isn't too hard.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows you to call actions that return functions and not just objects, it is what allows us to make asynchronous code

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Mine is Redux, because I kind of get it more than others my second favorite is state-hooks, becuae I rhink that they are really cool