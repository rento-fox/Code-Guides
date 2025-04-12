# Python Getting Started
    # Many PCs and Macs will have python already installed.
    # To check if you have python installed on a Windows PC,
    # search in the start bar for Python or run the following on the Command Line (cmd.exe):
        # C:\(path to the folder)>python --version

    # To check if you have python installed on a Linux or Mac, then on linux open the command line or on Mac open the Terminal and type:
        # python --version

    # If you find that you do not have Python installed on your computer,
    # then you can download it for free from the following website: https://www.python.org/

# Python Quickstart
    # Python is an interpreted programming language.
    # This means that as a developer you write Python (.py) files in a text editor,
    # and then put those files into the python interpreter to be executed.
    # The way to run a python file is like this on the command line:
        # C:\(path to the folder)>python '.\filename.py'

    # Where "filename.py" is the name of your python file.

# Python Version
    # To check the Python version of the editor, you can find it by importing the sys module:
    # Check the Python version of the editor:
import sys
print("Python Version: ", sys.version) # Python Version:  3.12.5 (tags/v3.12.5:ff3bc82, Aug  6 2024, 20:45:27) [MSC v.1940 64 bit (AMD64)]

# The Python Command Line
    # To test a short amount of code in python sometimes it is quickest and easiest not to write the code in a file.
    # This is made possible because Python can be run as a command line itself.
    # Type the following on the Windows, Mac or Linux command line:
        # C:\(path to the folder)>python

    # Or, if the "python" command did not work, you can try "py":
        # C:\(path to the folder)>py

    # From there you can write any python, including our hello world example from earlier in the tutorial:
        # C:\(path to the folder)>python
        # Python 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:04:45) [MSC v.1900 32 bit (Intel)] on win32
        # Type "help", "copyright", "credits" or "license" for more information.
        # >>> print("Hello, World!")

    # Which will write "Hello, World!" in the command line:
        # C:\Users\Your Name>python
        # Python 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:04:45) [MSC v.1900 32 bit (Intel)] on win32
        # Type "help", "copyright", "credits" or "license" for more information.
        # >>> print("Hello, World!")
        # Hello, World!

    # Whenever you are done in the python command line,
    # you can simply type the following to quit the python command line interface:
        # exit()

# EOF
