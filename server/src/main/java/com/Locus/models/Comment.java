public class Comment {
    private String text;
    private final User user;
    private Post post;
    private final LocalDateTime createdOn;

    public Comment() {}
    
    public Comment(User user, Post post, String text) {
        this.user = user;
        this.post = post;
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public User getUser() {
        return user;
    }

    public Post getPost() {
        return post;
    }

    public LocalDateTime getCreatedOn() {
        return createdOn;
    }
}
