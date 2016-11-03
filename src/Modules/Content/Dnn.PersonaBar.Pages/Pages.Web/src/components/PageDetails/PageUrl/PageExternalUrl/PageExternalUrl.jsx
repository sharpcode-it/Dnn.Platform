import React, {Component, PropTypes} from "react";
import styles from "./style.less";
import SingleLineInputWithError from "dnn-single-line-input-with-error";
import InputGroup from "dnn-input-group";
import localization from "../../../../localization";

class PageExternalUrl extends Component {

    onChangeField(key, event) {
        const {onChangeField} = this.props;
        onChangeField(key, event.target.value);
    }

    render() {
        const {page} = this.props;
        
        return (
            <div className={styles.pageExternalUrl}>
                <InputGroup>
                    <SingleLineInputWithError
                        label={localization.get("External URL")}
                        tooltipMessage={localization.get("external_url_tooltip")}    
                        value={page.title}
                        onChange={this.onChangeField.bind(this, "title")} />
                </InputGroup>
            </div>
        );
    }
}

PageExternalUrl.propTypes = {
    page: PropTypes.object.isRequired,
    onChangeField: PropTypes.func.isRequired
};

export default PageExternalUrl;