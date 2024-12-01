package com.invoiceprocessing.server2.dao;

import com.invoiceprocessing.server2.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice,Long> {
}
