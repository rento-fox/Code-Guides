*Last Updated: 25.10.2025*

#### [< Previous][previous] / [Next >][next]

[previous]: https://github.com/rento-fox/Code-Guides/tree/main/Intro%20To%20Programming/ITP%20Tutorial/ITP%2002%20Variables 'ITP 02 Variables'
[next]: h 'I'

<br>

# What is a Constant?

A constant is a value that cannot be changed after it is assigned.<br>
Constants are useful when you have a value that should stay the same while the program runs,<br>
like the value of PI, the number of days in a week, or a fixed URL.

Unlike variables, which can be updated, constants keep the same value once they are created:

<table>
    <tr>
        <th>Python</th>
        <th>JavaScript</th>
    </tr>
    <tr>
        <td>
<pre><code>PI = 3.14159
print(PI)
</code></pre>
        </td>
        <td>
<pre><code>const PI = 3.14159;
console.log(PI);
</code></pre>
        </td>
    </tr>
    <tr>
        <th>Java</th>
        <th>C++</th>
    </tr>
    <tr>
        <td>
<pre><code>final double PI = 3.14159;
System.out.println(PI);
</code></pre>
        </td>
        <td>
<pre><code>const double PI = 3.14159;
cout << PI;
</code></pre>
        </td>
    </tr>
</table>

## Why Use Constants?
Using constants makes your code easier to understand and maintain:

- Readability: Names like PI or DAYS_IN_WEEK explain what the number means.
- Safety: Constants protect important values from being accidentally changed.
- Easy updates: If you need to change a constant (like a tax rate), you only update it in one place.

## Changing a Constant
Once a constant is assigned, trying to change it will usually<br>
cause an error or be ignored, depending on the language.



<br>

#### [< Previous][previous] / [Next >][next]

[previous]: https://github.com/rento-fox/Code-Guides/tree/main/Intro%20To%20Programming/ITP%20Tutorial/ITP%2002%20Variables 'ITP 02 Variables'
[next]: h 'I'

<br>

*EOF*
