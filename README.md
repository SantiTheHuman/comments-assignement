This application is structured in a modular style to allow for independent work on separate components and facilitate scalability.

It has a container component, "App", from which different routes are accessed to display content from the corresponding functionality module.
In the "components" folder one finds code, assets and styles to run the container application, which includes the general interface shared by all modules.

The only outside dependency needed is the authorization context found in the folder "contexts". I added this to add a level of real world simulation, and to implement the function that takes the first letter of the user's name to be displayed on the account button in the "Navbar" component.

The app container imports an array from the "modules" folder, made of one object for each module, with the corresponing React component as well as a module name and a route name. This is to automate the routing and rendering of potentially changing modules.

In this working prototype there's a functioning "Comments" module that simulates functionality by interacting with a placeholder live API.
The module has its own "components" folder where all required funtionality is found. The module could basically be run in a completely different container.

In order to make the CSS files easy to reach when working on a module, there are corresponding style files for each component in the module's "styles" folder. This could be changed if there was a lot of repetition between modules in the complete application.

In the "Comments" module I've tried to separate funtionality into relevant componets, as well as to allow for modularity and reusability of components when possible, such as the "Modal" component being content-agnostic, serving its purpose for several functionality scenarios.



