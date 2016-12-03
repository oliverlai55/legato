import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCalendarData } from '../actions/index';

class CalendarEvents extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCalendarData();
  }

  render() {
    const { musicData } = this.props;
    if (!musicData.length) {
      return <div>still loading</div>;
    } else {
      return (
        <div>
          {musicData}
        </div>
      )
    }
    /*
    return this.props.musicData.results.map((movie) => {
      if (movie.poster_path !== null) {
        let movieImageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;

        return (
            <div key={movie.id} className="card col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <Link to={"movie/" + movie.id}>
                    <img className="card-img-top" src={movieImageUrl} alt="Image N/A" />
                </Link>
            </div>
        );
      }
    }
    */
  }
}

CalendarEvents.defaultProps = { musicData: [] };

function mapStateToProps(state) {
  return { musicData: state.musicData.all };
}

export default connect(mapStateToProps, { fetchCalendarData })(CalendarEvents);
