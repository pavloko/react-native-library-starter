### Developing a pure Javascript component for React Native?
This is a quick way to get started with everything you need in place.

### What's inside?
1. `./example/` project bootstraped with haul-cli. You can use `npm link <package-name>` to get livesync while developing.
2. Storybook setup in `example` project if you have more than one component to work on.

### How to start developing?
1. `cd example`
2. `yarn install`
3. `npm link ../`
4. `yarn run storybook`
5. `react-native run-ios`

### Renaming the project
You'd need to make changes in
1. `package.json` - change name to the name of your component.
2. `example/package.json` - add your package to `dependencies`, so it will get synced after you link it.

You should see storybook UI in the simulator and changes from `src/index.js` will automatically apply. 😻

Cheers:)
