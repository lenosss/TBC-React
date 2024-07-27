აღნიშნული პროექტი წარმოადგენს ტექნიკურ დავალებას TBC Academy-სთვის.
ამ პროექტის ფარგლებში შენ გვევალებოდა შეგვექმნა TBC Concept გვერდის pixel perfect ანალოგი.
ამ დავალების მთავარი სპეციფიკა კი იყო რომ გამოგვევლინა ჩენი Html css და JS ცოდნა და შეგვექმნა ზემოთხსენებული გვერდი ყველანაირი FrameWork-ის და Library-ს გამოყენების გარეშე.

ჩემს პროექტშ მე გამოვიყენე JS-ის შემდგომი ფუნქციები:

### Burger Menu

- **`showMenu`**: Displays and animates the mobile menu.
- **`hideMenu`**: Hides the mobile menu with a delay.
- **`toggleMenu`**: Toggles menu visibility and related classes.
- **`resetMenu`**: Resets menu on window resize.
- **Event Listeners**: Toggle menu on click, reset on resize.

### Button Menu Trigger

- **`toggleButtons`**: Toggles `active` and `hidden` classes on buttons.
- **Event Listener**: Toggles buttons on click.

### Cookies Wrapper

- **`hideCookiesWrapper`**: Hides cookies wrapper on button click.
- **Event Listener**: Hides wrapper on click.

### Header Menu Dropdown

- **`closeDropdown`**: Closes dropdown.
- **`openDropdown`**: Opens dropdown.
- **`toggleDropdown`**: Toggles dropdown visibility.
- **`closeAllDropdowns`**: Closes all dropdowns except specified.
- **Event Listeners**: Toggle dropdowns on click, close on window resize and document click.

### Swiper Functionality

- **Initialization**: Configures Swiper with breakpoints and navigation.
- **`updateScrollbarPosition`**: Updates scrollbar position on slide change.
- **`changeArrowColors`**: Changes arrow colors on navigation.
- **Event Listeners**: Updates scrollbar and changes arrow colors on navigation.

### Dropdown Background and Toggles

- **`toggleDropdown`**: Manages dropdown visibility and active state.
- **Event Listeners**: Toggles dropdowns on click.
...
### ინსტრუქცია პროექტის გაშვებისათვის:
 **კლონირება რეპოზიტორიის:**
    ```sh
   (https://github.com/lenosss/TBC-React.git)
    ```
### ნაბიჯები Go Live-ისთვის

1. **პროექტის გახსნა Visual Studio Code-ში**
   - გაუშვით Visual Studio Code.
   - გახსენით პროექტის ფოლდერი "File > Open Folder..." მენიუდან და აირჩიეთ თქვენი პროექტის დირექტორია.

2. **Live Server Extension-ის ინსტალაცია**
   - გადადით Extensions ხედვაზე, დააჭირეთ Extensions აიკონს, რომელიც განთავსებულია ფანჯრის გვერდზე.
   - Extensions ხედვაში ჩაწერეთ "Live Server" საძიებო ზოლში.
   - დააჭირეთ `Install` ღილაკს, რათა დააინსტალიროთ Live Server extension Ritwick Dey-ისგან.

3. **სერვერის გაშვება**
   - Extension-ის ინსტალაციის შემდეგ, ნახავთ "Go Live" ღილაკს Visual Studio Code-ის ფანჯრის ქვედა მარჯვენა კუთხეში.
   - გახსენით `index.html` ფაილი თქვენი პროექტის დირექტორიიდან.
   - დააჭირეთ "Go Live" ღილაკს სერვერის დასაწყებად.
   - თქვენი ნაგულისხმევი ბრაუზერი ავტომატურად გაიხსნება და ნახავთ თქვენს პროექტს. თუ ეს არ მოხდა, შეგიძლიათ ხელით შეხვიდეთ `http://127.0.0.1:5500` მისამართზე ბრაუზერში.

### Live Server-ის გამოყენება

- სერვერი ავტომატურად განაახლებს გვერდს, როდესაც შეიტანთ ცვლილებებს HTML, CSS ან JavaScript ფაილებში, რაც მოგცემთ რეალურ დროში უკუკავშირს.

### სერვერის გაჩერება

- სერვერის გასაჩერებლად, დააჭირეთ "Port: 5500" ღილაკს Visual Studio Code-ის ქვედა მარჯვენა კუთხეში და აირჩიეთ "Stop Live Server".

### პრობლემების მოგვარება

- თუ "Go Live" ღილაკი არ ჩანს, დარწმუნდით, რომ Live Server extension არის ინსტალირებული და ჩართული.
- თუ ბრაუზერი ავტომატურად არ იხსნება, შეამოწმეთ გამოსვლის კონსოლი შეცდომებისთვის ან ხელით შეხვიდეთ ზემოთ ნახსენებ URL-ზე.

### ავტორები:
- **მთავარი ავტორი:** ელენე მოლაშილი
  ### კავშირი
თუ გაქვთ რაიმე კითხვები ან შემოთავაზებები, გთხოვთ დამიკავშირდეთ ელ-ფოსტით: lenomolashvili@gmail.com ან მომწეროთ ჩემზ ლინკდინ ექაუნთზე https://www.linkedin.com/feed/
  
