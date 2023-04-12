#### dev

### beAt

## backend
  - Users
  - Posts 
  - Likes, Followers and comments

  # User
  - The base data in the database
  - Will compose of:
    # Details: (username, email, names, etc)
    # Posts: All the user's posts
    # Likes: Number of likes
    # Comments
    # Following
  
  
  # Post
  - The Post itself
  - Will compose of:
    # Owner: The id of the user who created the post
    # Location: The main data will be the location
    # Caption
    # Likes
    # Comments
    # Followers: list of Users that are following/followed the post

  
  # Comment
  - A single comment on a post
  - Include:
    # Owner: the id of the user who posted the comment
    # Post: id of the post that the user commented on
    # Comment: the text writen in the comment
