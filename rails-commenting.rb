# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the controller class instantiation inheriting from the application controller where all your methods will live inside
class BlogPostsController < ApplicationController
  def index
    # ---2)This is your index method that will run when you render your index route that uses the get route to display all of your content in the BlogPost table from your active record query instance variable.
    @posts = BlogPost.all
  end

  def show
    # ---3)This is your show method that will also use the get route and get passed an id for the specific instance by using params to patch in your id for this specific table instance you pass to your active record query in your instancevariavle
    @post = BlogPost.find(params[:id])
  end

  # ---4)this is your new method it adds a form to add new content to your table it will not work without the create method which runs a post route to actually add the content to your table
  def new 
    @post = Post.new
  end

  def create
    # ---5)this is your create method that adds the post route so the content you added to new can actually be created inside your table your instance variable is passing strong params to your active record query 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) this is your edit method that adds a form to edit contnent with the specofoc id passed through params  and it wont work without the update route which adds a patch
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)this is your update method which adds patch to your new method and actually makes the changes within your table it is also passing strong params to your update method 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)this is the else conditional within your destroy method it will reroute you to the page where you were attempting to erase your content if your initial attempt is not succesful
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) the keyword private makes it so the bit of code after the keyword is only accessible inside your controller method and not useable by anyone adding or changing content within your database
  private
  def blog_post_paramsccd
    # ---10) params.require makes it so anyone accessing your database can only add contents described in the permit to deter phisihing attempts or any other malicious intent that would corrupt your db
    params.require(:blog_post).permit(:title, :content)
  end
end
