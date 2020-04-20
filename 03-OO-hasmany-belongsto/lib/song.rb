class Song
    attr_reader :name
    attr_accessor :artist
    @@all = []
    def initialize(name, artist=nil)
        @name = name
        @artist = artist
        # @@all << self
        Song.all << self
    end

    def self.all 
        @@all
    end

    def artist_name
        if @artist
            @artist.name
        end
    end


end