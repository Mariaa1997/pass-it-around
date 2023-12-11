const React = require ('react');

class Index extends React.Component {
    render() {
        return (
            <div>
            <h2>99 Bottles Of Beer On The Wall</h2>
            <nav>
            <a href={`/`}> Take One Down, Pass It Around. </a>
</nav>
</div>
        )
    }
}
module.exports = Index;