const React = require('react');

class Show extends React.Component {
    render () {
        const count = this.props.counts;
        return (
            <div>
                <h1>{ count + ' Bottles Of Beer On The Wall. '}</h1>
            
            <nav>
                { count > 99 ? <a href={`/${count-1}`}> Take One Down, Pass It Around.</a> : <a href={`/`}>Start Over</a>}

            </nav>
            </div>
        )
    }
}
module.exports = Show;