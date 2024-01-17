public class User {
    private String name;
    private String bio;
    private String userName;
    private String password;
    private LocalDate DOB;
    
    private final LocalDateTime joinedOn;

    public User() {}

    public User(String name, String bio, String userName, String password, LocalDate DOB) {
        this.name = name;
        this.bio = bio;
        this.userName = userName;
        this.password = password;
        this.DOB = DOB;

        this.joinedOn = new LocalDateTime();
    }


    public String getName() {
        return name;
    }
    public void setName(String newName) {
        name = newName;
    }

    public String getBio() {
        return bio;
    }
    public void setBio(String newBio) {
        bio = newBio;
    }

    public String getUsername() {
        return userName;
    }
    public void setUsername(String newUsername) {
        username = newUsername;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String newPassword) {
        password = newPassword;
    }

    public LocalDate getDOB() {
        return DOB;
    }
    public void setDOB(LocalDate newDOB) {
        DOB = newDOB;
    }

    public LocalDateTime getJoinedOn() {
        return joinedOn;
    }
}
