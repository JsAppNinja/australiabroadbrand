import React, { Component, Fragment } from 'react';
import { Arrow } from '../../../components/Arrow';
import AnimateHeight from 'react-animate-height';

import './style.scss';

class ImpInformation extends Component {
  state = {
    isOpened: false,
  };
  expandDropdown = item => {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  };
  render() {
    const { isOpened } = this.state;
    return (
      <div className="dropdown">
        <div className="dropdown__button" onClick={this.expandDropdown}>
          Important information&nbsp;&nbsp;
          <div className="dropdown__button__img">
            <Arrow rotate={isOpened ? true : false} />
          </div>
        </div>
        <AnimateHeight duration={500} height={isOpened ? 'auto' : 0}>
          <section className="dropdown__content">
            <Fragment>
              <p className="imp-section__title">No Lock-in Contract</p>
              <p>
                All Australia Bro adband NBN Plans are No Lock-in Contract and
                you are you cancel at any time.
              </p>
            </Fragment>
            <Fragment>
              <p className="imp-section__title">No Connection or Hidden Fees</p>
              <p>
                Australia Broadband does not charge any activation or setup fees
                and standard NBN Co installations are completed at no cost to
                you. With Australia Broadband, there are no setup fees, no plan
                change fees, no relocation fees (if you are moving to another
                nbn-ready area) and no worries.
              </p>
            </Fragment>
            <Fragment>
              <p className="imp-section__title">Simple Billing</p>
              <p>
                You’ll be billed/direct debited on or around the 1st day of each
                month for that month’s subscription. Our payment options are
                Visa and MasterCard.
              </p>
            </Fragment>
            <Fragment>
              <p className="imp-section__title">Order Cancellation Policy</p>
              <p>
                If you place an order with Australia Broadband and cancel the
                order due to change of mind, no refund will be provided if your
                order is in progress with the NBN Co. An order is deemed to be
                “in progress” once you have received an order number from
                Australia Broadband and your payment h an installation
                appointment is needed, Australia Broadband will organise this
                with the NBN Co and contact you with the appointment details.
                You or an authorised person over 18 years of age will be
                required to be at the premises on the day of the appointment.
              </p>
              <p>Learn more about NBN Co Service Installations at:</p>
              <span>NBN Explained</span>
            </Fragment>
            <Fragment>
              <p className="imp-section__title">IP Address</p>
              <p>
                All NBN plans comes with Dynamic IP address. Static IP addresses
                are available for $10 extra per month. You can request a Static
                IP address after your internet service is connected by
                contacting{' '}
              </p>
              <span>Support.</span>
            </Fragment>
            <Fragment>
              <p className="imp-section__title">
                NBN Co charges may apply to some customers
              </p>
              <p>
                Some homes may be subject to an NBN Co{' '}
                <span>Non-Standard Installation</span> or a NBN Co{' '}
                <span>New Development Charge</span> of $300.
              </p>
              <p>
                If your home is subject to any of these NBN Co charges, we’ll
                let you know and get your permission before you’re charged.
                vailability at you r premises. This service, including dialling
                000, will not function in the event of a power failure or
                disruption or an internet outage. This service is not suitable
                if you have a serious illness or life threatening condition, if
                you require disability services, if you have a back-to-base home
                alarm system or if you require an uninterrupted phone line.
              </p>
            </Fragment>
            <Fragment>
              <p className="imp-section__title">Fair Use Policy</p>
              <p>
                All Australia Broadband services are subject to our Fair Go
                Policy. Prohibited Use includes using this service in a business
                or for any purpose or activity that is illegal, fraudulent or
                any other nature contrary to our Fair Go policy. Learn more
                about our Fair Use Policy at: What is your Fair
                <span>Go Policy?</span>
              </p>
            </Fragment>
            <Fragment>
              <p className="imp-section__title">
                Subscription Cancellation Policy
              </p>
              <p>
                If you cancel your Australia Broadband subscription, we won’t
                refund any fees that you’ve already paid to us. After your order
                has been activated, you can cancel your Australia Broadband
                subscription by informing us before the end of the month. If you
                don’t inform us of your cancellation before the end of the
                month, you will be charged for another month’s subscription.{' '}
              </p>
            </Fragment>
          </section>
        </AnimateHeight>
      </div>
    );
  }
}

export default ImpInformation;
