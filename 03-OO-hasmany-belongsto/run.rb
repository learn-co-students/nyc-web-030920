require 'pry'
require_relative "./lib/artist.rb"
require_relative "./lib/song.rb"
require_relative "./lib/author.rb"
require_relative "./lib/post.rb"

a1 = Artist.new("Alex")
s1 = Song.new("Work From Home", a1 )

auth1 = Author.new("Ethan")
p1 = Post.new("I dont know", auth1)


binding.pry
puts "something"