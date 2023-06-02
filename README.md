# Movie search React application
Movie Search multipage React application using themoviedb.org API
- [Backend info](https://developers.themoviedb.org/3/getting-started/introduction);

## 💼 Used technologies

This task is implemented with React, Create React App, styled-components, Axios, React Router, prop-types

## 🌱 About this project
<h3 >
Routes
</h3>

The app has the following routes. 
- The `Home` component, the home page with a list of popular movies.
- The `/movies` - component Movies, a page of movie search by keyword.
- `/movies/:movieId'` - component MovieDetails, a page with detailed information about the movie.
- `/movies/:movieId/cast` - component Cast, information about the cast. Rendered on the page MovieDetails.
- `/movies/:movieId/reviews` - component Reviews, information about reviews. Rendered on the page MovieDetails.
<p>
If a user has accessed a non-existent route, it will be redirected to the home page.
</p>


<h3 >
Code Splitting
</h3>

Added asynchronous JS code loading for the application routes using `React.lazy()` and `<Suspense>`.

- [Preview working application](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view);


- 💬 If you have any questions/feedback, please do not hesitate to reach out to
  me!


### 🤝 Contact me:

<a href="https://www.linkedin.com/in/hanna-konchakovska/"><img align="left" src="https://raw.githubusercontent.com/yushi1007/yushi1007/main/images/linkedin.svg" alt="Hanna | LinkedIn" width="21px"/></a>

