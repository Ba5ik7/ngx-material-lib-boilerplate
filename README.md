# Angular Material Library Boilerplate

This repository serves as a boilerplate for Angular projects that utilize Angular Material. It is set up using Angular's projects (mono-repo) structure, providing an Angular Library and an Angular Application to demonstrate the library's capabilities. This setup allows users to quickly get started by seamlessly integrating the Angular Library into the Angular Demo Application.

## Features

- **Angular Library**: The repository includes an Angular Library that encapsulates reusable components, services, and utilities. This library is designed to promote code modularity, reusability, and maintainability across different Angular projects.

- **Angular Demo Application**: The Angular Demo Application showcases the Angular Library in action. It serves as a playground for developers to explore and test the library's components and features. The application is pre-configured to load the Angular Library, allowing users to quickly visualize and interact with the library's functionality.

- **Angular Material Theming**: The theming system provided by Angular Material is leveraged in this repository. It enables easy customization and consistent theming throughout the application. A theme picker component is included, offering an array of different themes to choose from. Developers can experiment with different themes, including light and dark settings, to visualize their components in various visual contexts.

## Getting Started

To use this boilerplate, follow these steps:

1. Clone the repository using the instructions provided in the [Cloning and Setting up a New Angular Repository](#cloning-and-setting-up-a-new-angular-repository) section of the README.md file.

2. Install the necessary dependencies by running `npm install` in the project's root directory.

3. // @TODO: RUN SCRIPT TO RENAME PROJECT AND LIB

4. Run the Angular Demo Application using `ng serve` command. This will launch the application and allow you to interact with the Angular Library's components.

5. Use the theme picker component to switch between different themes and test the components in different visual settings.

Feel free to modify and extend this boilerplate to suit your specific project requirements. It provides a solid foundation for creating Angular applications with Angular Material, Angular Library, and an integrated theming system.

## Contributing

Contributions to this repository are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request. Let's collaborate and improve this Angular Material Boilerplate together.

Happy coding!


# Cloning and Setting up a New Angular Repository

This guide provides step-by-step instructions on how to clone an Angular repository, rename it, and set it as a new repository. These steps will allow future developers to reference the process.

## Cloning the Repository

1. Copy the clone URL of the original repository. You can find it on the repository's GitHub page by clicking on the green "Code" button.

2. Open your terminal or Git Bash and navigate to the directory where you want to clone the repository.

3. Run the following command, replacing `<clone_URL>` with the URL you copied in step 1:

```bash
git clone <clone_URL>
```


This command will create a local copy of the repository on your machine.

4. Once the repository is cloned, you can rename the directory to your desired name, using the `mv` command. For example, if you want to rename it to "my-angular-app," you can run:

```bash
mv old-repo-name my-angular-app
```


## Setting up the New Repository

1. Create a new repository on GitHub or any other Git hosting service where you want to store your boilerplate code.

2. Go to the new repository's GitHub page and copy its clone URL.

3. Back in your terminal or Git Bash, navigate into the directory of your renamed repository (`my-angular-app` in the previous example).

4. Run the following command, replacing `<new_clone_URL>` with the URL you copied in step 2:

```bash
git remote set-url origin <new_clone_URL>
```


This command updates the remote URL of your repository to point to the new repository you created.

5. Finally, you can push the cloned repository to the new repository:

```bash
git push -u origin main
```


This command pushes your code to the new repository and sets the upstream branch.

Now you have successfully cloned the original repository, renamed it, and pushed it to a new repository.

## Resetting the Repository to the Initial State

If you need to reset the repository to its initial state, you can use the following command:

```bash
git reset --hard HEAD
```

This command will reset your repository's branch to the last commit, effectively discarding any changes you made. Use this command with caution as it permanently removes any uncommitted changes and cannot be undone.

