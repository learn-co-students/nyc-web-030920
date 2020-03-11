require 'spec_helper'

describe 'Song' do
  let!(:song) { Song.new('Survivor') }
  let!(:song2) { Song.new('My Heart Will Go On') }

  after(:each) do
    Song.class_variable_set(:@@all, [])
  end

  describe '#new' do
    it 'is initialized with an argument of a name' do
      expect { Song.new('Say my Name') }.to_not raise_error
    end

    it 'pushes new instances into a class variable called @@all upon initialization' do
      expect(Song.class_variable_get(:@@all)).to match([song, song2])
    end
  end

  describe '@@all' do
    it 'is a class variable set to an array' do
      expect(Song.class_variable_get(:@@all)).to be_a(Array)
    end
  end

  describe '.all' do
    it 'is a class method that returns an array of all song instances that have been created' do
      expect(Song.all).to match([song, song2])
    end
  end

  describe '#name' do
    it 'has a name' do
      expect(song.name).to eq('Survivor')
    end
  end

  describe '#artist' do
    it 'belongs to an artist' do
      drake = Artist.new('Drake')
      song.artist = drake
      expect(song.artist).to eq(drake)
    end
  end

  describe '#artist_name' do
    it 'knows the name of its artist' do
      drake = Artist.new('Drake')
      song.artist = drake
      expect(song.artist_name).to eq('Drake')
    end

    it 'returns nil if the song does not have an artist' do
      expect(song.artist_name).to eq nil
    end
  end
end
