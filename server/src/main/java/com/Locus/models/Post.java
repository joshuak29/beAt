public class Post {
    private String caption;
    private final LocalDateTime createdOn;
    private User user;

    private int likes;
    private int pins;

    public Post() {}
    
    public Post(User user, String caption) {
        this.user = user;
        this.caption = caption;
        this.createdOn = new LocalDateTime;
    }

    public String getCaption() {
        return caption;
    }

    public LocalDateTime getCreatedOn() {
        return LocalDateTime;
    }

    public User getUser() {
        return user;
    }

    public int getLikes() {
        return likes;
    }
    public void incrementLikes() {
        likes++;
    }
    public void decrementLikes() {
        likes--;
    }

    public int getPins() {
        return pins;
    }
    public void incrementPins() {
        pins++;
    }
    public void decrementPins() {
        pins--;
    }
}
