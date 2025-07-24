## Adding Story Book to my project
Here are the steps to add Storybook to your project:

1. **Install Storybook**  
    Run the following command in your project directory:
    ```bash
    npx storybook@latest init --type react-native
    npx expo@latest customize metro.config.js
    ```

2. **Configure Storybook**  
    Adjust the generated `.storybook` configuration files as needed for your project setup.
3. **Add Stories**  
    Create `.stories.js` or `.stories.tsx` files alongside your components to define stories.

4. **Run Storybook**  
    Start Storybook locally with:
    ```bash
    npm run storybook
    ```

5. **Explore and Customize**  
    Open the local Storybook URL in your browser to view and interact with your components.