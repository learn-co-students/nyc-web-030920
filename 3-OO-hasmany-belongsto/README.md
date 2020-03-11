# Ruby Objects Has Many Lab

# Questions:
- run.rb

## Objectives

- Build out the has many/belongs to relationship between two classes.
- Build methods that use the has many/belongs to relationship between two classes.
- Use a class variable to track data about a class.
- Build a class method to expose data stored in a class variable.

## Instructions

In this lab, we'll be dealing with two sets of classes. The `Artist` and `Song`
class and the `Author` and `Post` class. An artist should have many songs and a
song should belong to an artist. An author should have many posts and a post
should belong to an author.

![Artist and Song](https://curriculum-content.s3.amazonaws.com/module-1/ruby-oo-relationships/has-many-lab/Image_139_CodeObjectsRelations%28B%29.png)

Because of the has many/belongs to relationship between your classes, the
`Artist` tests, i.e. the tests in `spec/artist_spec.rb`, rely on some code in
the `Song` class and vice versa. You will have to build out both the classes as
you go. The same is true of the tests for the `Author` and `Post` classes. So,
as you proceed through solving this lab, you will go back and forth between
coding in `Artist` and `Song` and between coding in `Author` and `Post`.

We recommend starting out by getting some of the initial `Artist` tests passing
and switching to write code in the `Song` class as directed by the test output.
Then, once your `Artist` and `Song` tests are passing, do the same for `Author`
and `Post`.

This lab is primarily test-driven. So run the test suite with the `learn`
command to get started. Read the test output very carefully to help guide you
through. First, read through the guidelines below and refer back to them as you
complete the lab.

### Building the has many/belongs to relationship

How can an artist have many songs and a song belong to an artist? An individual
song will need to have a reference to the artist it belongs to, meaning it will
need to have an `artist=()` and `artist` method. And an individual artist will
need a method that returns a collection of all the songs that belong to that
artist. Which means the song class will need to have a class variable that holds
all instances of every song that's been created in an array. To access that
array, the song class will also need a class method that returns the class
variable holding those instances.

![Author and Posts](https://curriculum-content.s3.amazonaws.com/module-1/ruby-oo-relationships/has-many-lab/Image_139_CodeObjectsRelations%28C%29.png)

How can an author have many posts and a post belong to an author? An individual
post will need to hold a reference to the author it belongs to, meaning it will
need to have an `author=()` and `author` method. And an individual author will
need a method that returns a collection of all the posts that belong to that
author. Which means the post class will need to have a class variable that holds
all instances of every post that's been created in an array. To access that
array, the post class will also need a class method that returns the class
variable holding those instances.

### Who Knows About Who?

In order to have an artist find all of it's songs, the song class needs to know
about all its song instances and a song instance needs to know about the artist
class it belongs to.

![](https://curriculum-content.s3.amazonaws.com/module-1/ruby-oo-relationships/has-many-lab/Image_139_CodeObjectsRelations%28A%29.png)

The same goes for an author and a post. To do this, you'll need to create a
class variable that keeps track of all its post instances and a post instance
needs to know about the author class it belongs to.

#### The `#add_song_by_name` and `#add_post_by_title` Methods

The `#add_song_by_name` method should take in an argument of a name (or title),
use that argument to create a new song (or post) and _then_ associate the
objects.

For `add_post_by_title`, you'll want to make sure the body of the method
associates the newly created post with an author.

These methods don't need to return anything, they just create associations.

#### The `#artist_name` and `#author_name` Methods

Build the methods `some_song.artist_name` and `some_post.author_name` that
return the names of the artist and author of the given song and post
respectively.

These methods should use, or extend, the has many/belongs to relationship you're
building out. If a song has an artist, you can call: `some_song.artist` and
return an actual instance of the `Artist` class. Since every artist has a name,
`some_song.artist.name` should return the name of the `Artist` instance
associated with the given song. Your `#artist_name` method should utilize this
relationship.

**Note:** We like our code to be robust, i.e. not easily breakable. Make sure your
`#artist_name` and `#author_name` methods will not break if the given song or
post does not have an artist or author. In this case, your methods should return
`nil`.

### The `.song_count` and `.post_count` Methods

You'll be required to write a class method that returns the total number of
songs that have been created. You'll be required to write a similar method for
the `Author` class. How can we get access to total number of songs from the
artist class or the total number of posts from the author class?

<p class='util--hide'>View <a href='https://learn.co/lessons/ruby-objects-has-many-lab'>Has Many Object Lab</a> on Learn.co and start learning to code for free.</p>
