import React from "react"

    const styles = {

        container: {
            maxWidth: "1200px",
            margin: "0 auto",
            border: "2px solid black",
            boxShadow: "2px 2px 2px rgba(50,50,50,.8)"

        },

        header: {
            margin: "0 auto",
            width: "80%"
            
        }

        


    }

export default function BlogPost(post){

    


    return (
        <article style={styles.container} class="container">
            <header class="blog-head">
                <h2>{post.title}</h2>
                <img>{post.featuredImg}</img>
            </header>
            <section>
                <p>{post.body}</p>
            </section>
        </article>


    

        
    )
}