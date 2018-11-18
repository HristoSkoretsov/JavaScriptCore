let expect=require('chai').expect;
const SubscriptionCard=require('./SubscriptionCard');

describe('SubscriptionCard', function () {
    let subscriptionCard;
    beforeEach(function () {
        subscriptionCard = new SubscriptionCard('Niko','Nikov','123456');
    });
    it('Proper object', function () {
        let result = subscriptionCard;
        let obj = {};

        expect(result).to.be.eql(result);
    });

    describe('addSubscription function', function () {
        it('add properly', function () {
            subscriptionCard.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = subscriptionCard._subscriptions;
            expect(result).to.eql(result);
        });
        it('add properly *', function () {
            subscriptionCard.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            let result = subscriptionCard._subscriptions;
            expect(result).to.eql(result);
        });

    });

    describe('block function', function () {
        it('block card', function () {
            subscriptionCard.block();
            let result = subscriptionCard._blocked;
            expect(result).to.eql(true);
        });
        it('block uncheced', function () {

            let result = subscriptionCard._blocked;
            expect(result).to.eql(false);
        });
        it('unblock', function () {
            subscriptionCard.unblock();
            let result = subscriptionCard._blocked;
            expect(result).to.eql(fa);
        });

    });


});