# My explanations and assumptions

* General description of the feature:
    1. The client fetches the options that can be selected for each category (carat, cut, color, clarity).
    2. The user selects a value from the relevant list for all four categories shown in the form and click on Calculate button.
    3. An error message shows if not all four categories are selected - specify which category have not been selected.
    4. If the user selected a value for all four categories and clicked on the Calculate button, then the Client present the diamond price,
        which was calculated on the server.
    5. The user can click on the Reset button to reset the form and the price.

* Explanation of how I chose to calculate the price:
    1. Carat weight: Each 0.1 carat weight priced at 500 NIS. (0.3 = 1500 NIS, 0.5 = 2500 NIS,...).
        The carat weight per price are stored in a constant object.
    2. Cut: Has 4 options (Brilliant, Radiant, Princess, Fantasy).
    3. Color: Has 5 options (D, E, F, G, H).
    4. Clarity: Has 7 options (IF, VVS1, VVS2, VS1, VS2, SI1, SI2).
    5. For each option (in cut, color and clarity) I chose a percentage number to raise the diamond price by.
       The cut/color/clarity title per percentage are stored in a constant object.
    6. Example: user choose the values: carat = 0.1 (500 NIS) , cut = Princess (raise by 15%), color = E (raise by 25%), clarity = VS1 (raise by 25%).
        price = 500 + (15/100 * 500) + (25/100 * 500) + (25/100 * 500) = 825

* I used NodeJs, NestJS and Typescript for the sever side.
* I used ReactJS for the client side.
* The feature is responsive.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## License

  Nest is [MIT licensed](LICENSE).
