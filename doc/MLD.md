# MLD

- Game(IDGame, Title, Description, Release, Kind)
- Challenge(IdChallenge, Title, Description, Difficulty, #IdGame, #IdUser, #IdCategory)
- Realization (IdRealization, Link, Status, #IdChallenge, #IdUser)
- Category(IdCategory, Title, Description, Color)
- User (IdUser, Name, Password, Email, Role)
- Platform (IdPlatform, Name)
- Like (#IdUser, #IdChallenge)
- Vote (#IdUser, #IdRealization)
- Support (#IdGame, #IdPlatform)
