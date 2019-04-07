import React from 'react'

const styles = {
    div: {
        maxWidth: '1200px',
        margin: '0 auto',
    },

    figure: {
        width: '500px'
    },

    img: {
        width: '500px',
        padding: '1rem',
    }
}

export default function BlogPostPreview(props) {
    return (
        <div style={styles.div}>
            <figure sytle={styles.figure}>
                <img style={styles.img} src={props.featuredImg.src} alt={props.featuredImg.caption} />
                <p>{props.summary}</p>
                <figcaption>{props.featuredImg.caption}</figcaption>
            </figure>
        </div>
    )
}