require "spec_helper"

describe "Artist" do

  let!(:adele) { Artist.new("Adele") }

    describe "#new" do
      it "is initialized with a name" do
        expect{Artist.new("Beyonce")}.to_not raise_error
      end
    end

    describe "#name" do
      it "has an attr_accessor for name" do
        expect(adele.name).to eq("Adele")
      end
    end

    describe "#songs" do
      it "has many songs" do
        expect(adele.songs).to be_a(Array)
        hello = Song.new("Hello")
        hello.artist = adele
        expect(adele.songs).to eq([hello])
      end
    end

    describe "#add_song" do
      it "takes in an argument of a song and associates that song with the artist by telling the song that it belongs to that artist" do
        hello = Song.new("Hello")
        adele.add_song(hello)
        expect(adele.songs).to include(hello)
        expect(hello.artist).to eq(adele)
      end
    end

    describe "#add_song_by_name" do
      it "takes in an argument of a song name, creates a new song with it and associates the song and artist" do
        adele.add_song_by_name("Rolling in the Deep")
        expect(adele.songs.last.name).to eq("Rolling in the Deep")
        expect(adele.songs.last.artist).to eq(adele)
      end
    end

    describe ".song_count" do
      it "is a class method that returns the total number of songs associated to all existing artists" do
        expect(Artist.song_count).to eq(3)
      end
    end
end
