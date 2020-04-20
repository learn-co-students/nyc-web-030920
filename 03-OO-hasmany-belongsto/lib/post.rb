class Post
    attr_reader :title
    attr_accessor :author
    @@all = []
    def initialize(title, author=nil)
        @title = title
        @author = author
        # @@all << self
        Post.all << self
        # [post1, post2, post3]
    end

    def self.all 
        @@all
    end
    # def title 
    #     @title
    # end
    # def author 
    #     @author
    # end
    # def author=(author)
    #     @author = author
    # end

    def author_name
        if @author
            @author.name
        end
    end
end