import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../api/axios';
import './OrderDetail.css';

export default function OrderDetail() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    api
      .get(`/orders/${id}/`)
      .then(({ data }) => setOrder(data))
      .catch(() => toast.error('Could not load order.'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleCancelOrder = async () => {
    setCancelling(true);

    try {
      const { data } = await api.post(`/orders/${id}/cancel/`);

      setOrder((currentOrder) => ({
        ...currentOrder,
        status: data.status,
      }));

      setShowCancelModal(false);
      toast.success('Order cancelled successfully.');
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
        'Could not cancel the order.'
      );
    } finally {
      setCancelling(false);
    }
  };

  if (loading) {
    return <p className="loading-text">Loading order...</p>;
  }

  if (!order) {
    return <p className="loading-text">Order not found.</p>;
  }

  const canCancel = order.status === 'pending';

  return (
    <div className="order-detail-page">

      {/* Back */}

      <Link to="/orders" className="order-detail-back">
        &larr; Back to orders
      </Link>

      {/* Header */}

      <div className="order-detail-header">

        <div>
          <p className="order-detail-eyebrow">
            ORDER DETAILS
          </p>

          <h1>Order #{order.id}</h1>
        </div>

        <span className={`order-detail-status status-${order.status}`}>
          {order.status}
        </span>

      </div>

      {/* Main Grid */}

      <div className="order-detail-grid">

        {/* Shipping */}

        <section className="order-detail-card shipping-card">

          <div className="order-detail-card-header">

            <div>
              <p className="order-detail-label">
                DELIVERY
              </p>

              <h2>Shipping Information</h2>
            </div>

            <span className="order-detail-icon">
              ⌖
            </span>

          </div>

          <div className="shipping-details">

            <div className="shipping-detail">
              <span className="detail-label">
                Name
              </span>

              <span className="detail-value">
                {order.full_name}
              </span>
            </div>

            <div className="shipping-detail">
              <span className="detail-label">
                Address
              </span>

              <span className="detail-value">
                {order.address}, {order.city} - {order.postal_code}
              </span>
            </div>

            <div className="shipping-detail">
              <span className="detail-label">
                Phone
              </span>

              <span className="detail-value">
                {order.phone_number}
              </span>
            </div>

          </div>

        </section>

        {/* Order Summary */}

        <section className="order-detail-card summary-card">

          <div className="order-detail-card-header">

            <div>
              <p className="order-detail-label">
                ORDER SUMMARY
              </p>

              <h2>Summary</h2>
            </div>

            <span className="order-detail-icon">
              #
            </span>

          </div>

          <div className="summary-content">

            <div className="summary-row">
              <span>Order</span>
              <strong>#{order.id}</strong>
            </div>

            <div className="summary-row">
              <span>Status</span>

              <strong className={`summary-status status-text-${order.status}`}>
                {order.status}
              </strong>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{order.total_amount}</strong>
            </div>

          </div>

          {canCancel && (
            <button
              className="cancel-order-button"
              onClick={() => setShowCancelModal(true)}
            >
              Cancel Order
            </button>
          )}

          {order.status === 'cancelled' && (
            <div className="cancelled-message">
              This order has been cancelled.
            </div>
          )}

        </section>

        {/* Items */}

        <section className="order-detail-card items-card">

          <div className="order-detail-card-header">

            <div>
              <p className="order-detail-label">
                YOUR PURCHASE
              </p>

              <h2>Items</h2>
            </div>

            <span className="order-detail-icon">
              ✦
            </span>

          </div>

          <div className="order-items">

            {order.items.map((item) => (
              <div
                className="order-detail-item"
                key={item.id}
              >

                <div className="order-item-info">

                  <span className="order-item-name">
                    {item.product_name}
                  </span>

                  <span className="order-item-quantity">
                    Quantity: {item.quantity}
                  </span>

                </div>

                <span className="order-item-price">
                  ₹{item.subtotal}
                </span>

              </div>
            ))}

          </div>

          <div className="order-detail-total">
            <span>Total</span>
            <strong>₹{order.total_amount}</strong>
          </div>

        </section>

        {/* Payment */}

        <section className="order-detail-card payment-card">

          <div className="order-detail-card-header">

            <div>
              <p className="order-detail-label">
                PAYMENT
              </p>

              <h2>Payment Status</h2>
            </div>

            <span className="order-detail-icon">
              ₹
            </span>

          </div>

          <div
            className={`payment-status ${
              order.is_paid ? 'paid' : 'pending'
            }`}
          >

            <span className="payment-status-dot"></span>

            <div>

              <strong>
                {order.is_paid
                  ? 'Payment completed'
                  : 'Payment pending'}
              </strong>

              <p>
                {order.is_paid
                  ? `Paid via ${order.payment_method}`
                  : 'Payment gateway will be available later.'}
              </p>

            </div>

          </div>

        </section>

      </div>

      {/* Custom Cancel Modal */}

      {showCancelModal && (
        <div
          className="cancel-modal-overlay"
          onClick={() => {
            if (!cancelling) {
              setShowCancelModal(false);
            }
          }}
        >

          <div
            className="cancel-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cancel-modal-icon">
              !
            </div>

            <p className="cancel-modal-eyebrow">
              CANCEL ORDER
            </p>

            <h2>
              Cancel Order #{order.id}?
            </h2>

            <p className="cancel-modal-text">
              Are you sure you want to cancel this order?
              This action cannot be undone.
            </p>

            <div className="cancel-modal-actions">

              <button
                className="keep-order-button"
                onClick={() => setShowCancelModal(false)}
                disabled={cancelling}
              >
                Keep Order
              </button>

              <button
                className="confirm-cancel-button"
                onClick={handleCancelOrder}
                disabled={cancelling}
              >
                {cancelling
                  ? 'Cancelling...'
                  : 'Cancel Order'}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}